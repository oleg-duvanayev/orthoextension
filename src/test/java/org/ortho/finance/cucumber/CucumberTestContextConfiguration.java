package org.ortho.finance.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import org.ortho.finance.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
