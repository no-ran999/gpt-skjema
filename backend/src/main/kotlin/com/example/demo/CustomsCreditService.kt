package com.example.demo


import com.example.demo.model.Innsendingsbekreftelse
import com.example.demo.model.SoknadOmTollkreditt
import org.springframework.stereotype.Service

@Service
class TollkredittService {
    fun sokOmTollkreditt(soknad: SoknadOmTollkreditt): Innsendingsbekreftelse {
        // Forretningslogikk for å behandle søknaden
        return Innsendingsbekreftelse(innsendingsdato = "TBD", svarfrist = "TBD")
    }

    // Mer forretningslogikk kan legges til her
}

// Repositoriet laget er en plassholder for nå og vil bli definert for å samhandle med databasen.