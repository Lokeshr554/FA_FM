/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2015. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
package com.ibm.egl.rui.loader;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import javax.servlet.ServletContext;
import com.ibm.javart.debug.DebugServiceServlet;

public class File {

	private static String IMPORTNODE = "<import>";

	public String getURL(String project, String name, int port) {
		return "http://localhost:" + port + "/" + project + "/"+name;
	}

	public String getContents(String project, String name, int port, ServletContext context ) {
		InputStream is = null;
		StringBuilder builder = new StringBuilder();

		try {
			if( context instanceof ServletContext && !DebugServiceServlet.isUsedDebugServiceServlet() ) {
				is = context.getResourceAsStream( "/" + name );
			} else {
				is = new BufferedInputStream(new URL(getURL(project, name, port)).openStream());
			}

            int byteRead;
            while ((byteRead = is.read()) != -1)
                builder.append((char) byteRead);
            return builder.toString();
		}
		catch (Exception e) {
			throw new IllegalArgumentException(getURL(project, name, port));
		}finally{
			try {
				if(null != is){
					is.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public String getContentsForImport(String project, String name, int port, ServletContext context ){
		InputStream is = null;
		StringBuilder builder = new StringBuilder();
		URL url=null;
		try {
			if( context instanceof ServletContext && !DebugServiceServlet.isUsedDebugServiceServlet() ) {
				is = context.getResourceAsStream( "/" + name );
			} else {
				url=new URL(getURL(project, name, port));
				URLConnection uc =url.openConnection();
				uc.setConnectTimeout(1000);
				uc.connect();
				is = uc.getInputStream();
			}

            int byteRead;
            while ((byteRead = is.read()) != -1)
                builder.append((char) byteRead);
            String contents = builder.toString();
            if(contents.indexOf(IMPORTNODE) > 0){
            	return(contents);
            }
            return "";
		}
		catch(Exception ioe){
			throw new IllegalArgumentException(getURL(project, name, port));
		}finally{
			if(null != is){
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
