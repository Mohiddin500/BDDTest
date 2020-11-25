package com.utilities;

import pageobjects.FodPage;
import pageobjects.HomePage;
import pageobjects.SerpPage;

public class PageObjectManager {
	
	
private HomePage homepage;
private SerpPage serppage;
private FodPage fodpage;



public HomePage getHomePage() {
	
	return (homepage==null)?new HomePage() : homepage;
}


public SerpPage getSerpPage() {
	return (serppage==null)? new SerpPage(): serppage;
}

public FodPage getFodPage() {
	return (fodpage==null)? new FodPage(): fodpage;
}



}
