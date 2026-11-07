package com.anatomyfit.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anatomyfit.backend.dto.DashboardSummaryDTO;
import com.anatomyfit.backend.service.DashboardService;

@RestController
@RequestMapping("/api/v1/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    /** GET /api/v1/dashboard — aggregated workout stats for the dashboard page */
    @GetMapping
    public ResponseEntity<DashboardSummaryDTO> getDashboard() {
        return ResponseEntity.ok(dashboardService.getSummary());
    }
}
