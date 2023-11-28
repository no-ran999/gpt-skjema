package com.example.demo.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import com.example.demo.TollkredittService
import com.example.demo.model.Innsendingsbekreftelse
import com.example.demo.model.SoknadOmTollkreditt

@RestController
@RequestMapping("/api/tollkreditt")
class TollkredittController(private val tollkredittService: TollkredittService) {

    @PostMapping("/sok")
    fun sokOmTollkreditt(@RequestBody soknad: SoknadOmTollkreditt): ResponseEntity<Innsendingsbekreftelse> {
        return ResponseEntity.ok(tollkredittService.sokOmTollkreditt(soknad))
    }
    // Flere endepunkter kan legges til her
}