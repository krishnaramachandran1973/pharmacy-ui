package com.cts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class PharmacyUiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PharmacyUiApplication.class, args);
	}

}
