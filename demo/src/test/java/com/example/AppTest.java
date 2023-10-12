package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Unit test App.
 */
public class AppTest 
{
    private final String baseUrl = "http://localhost:8080";

    @Before
    public void setUp() throws IOException {
    }

    @Test
    public void testServerResponse() throws IOException {
        URL url = new URL(baseUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        assertEquals(200, connection.getResponseCode());

        BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        StringBuilder response = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            response.append(line);
        }
        reader.close();

        assertEquals("Hello, Java Server!", response.toString());

        connection.disconnect();
    }
}