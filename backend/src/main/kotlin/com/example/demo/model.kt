package com.example.demo.model

data class Kontaktinformasjon(
    val fullt_navn: String,
    val telefonnummer: String,
    val epost: String
)

data class SoknadOmTollkreditt(
    val organisasjonsnummer: String,
    val virksomhetsnavn: String,
    val kontaktinformasjon: Kontaktinformasjon,
    val soknadForUnderavdeling: String,
    val kontonummer: String,
    val onsketKredittgrense: Double?,
    val vedlegg: Vedleggsinfo
)

data class Vedleggsinfo(
    val obligatorisk: Boolean,
    val notater: String
)

data class Innsendingsbekreftelse(
    val innsendingsdato: String,
    val svarfrist: String
)