package com.tech11.jaxrs;

import lombok.experimental.UtilityClass;

@UtilityClass
public class DateFormats {

	public static final String LOCAL_DATE_FORMAT = "yyyy-MM-dd";
	public static final String LOCAL_DATE_TIME_FORMAT = "yyyy-MM-dd'T'HH:mm[:ss[.SSS]]";
	public static final String ZONED_DATE_TIME_FORMAT = "yyyy-MM-dd['T'HH:mm[:ss[.SSS]][X]]";

	/**
	 * Matches all formats that are allowed
	 */
	public static final String GENERAL_FORMAT = "yyyy-MM-dd['T'HH:mm[:ss[.SSS[S[S[S[S]]]]]][X]]";

}
