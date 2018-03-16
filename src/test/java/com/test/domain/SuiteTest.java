package com.test.domain;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import junit.framework.Test;
import junit.framework.TestSuite;
 
@RunWith(Suite.class)
@Suite.SuiteClasses({InstallationTestCase.class,WithdrawTestCase.class})
public class SuiteTest {
  //nothing
}