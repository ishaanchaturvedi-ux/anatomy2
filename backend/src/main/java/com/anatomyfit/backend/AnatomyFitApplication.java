package com.anatomyfit.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.File;

@SpringBootApplication
public class AnatomyFitApplication {

    public static void main(String[] args) {
        // Ensure data directory exists for SQLite database
        File dataDir = new File("data");
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        SpringApplication.run(AnatomyFitApplication.class, args);
    }
}
