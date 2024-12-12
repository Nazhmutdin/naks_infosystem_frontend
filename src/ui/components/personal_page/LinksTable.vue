<template>
    <table class="table">
        <thead>
            <tr>
                <th>certification</th>
                <th>protocol</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>
                    <a :href="certFileLink(getCertNumber(cert))" target="_blank" class="cert-link">{{ getCertNumber(cert) }}</a>
                </th>
                <th></th>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import type { PersonalNaksCertificationData } from '@/application/types';

    defineProps<{
        cert: PersonalNaksCertificationData | undefined
    }>()
    

    const getCertNumber = (cert: PersonalNaksCertificationData | undefined) => {
        if (cert === undefined){
            return ""
        }

        let certNumber = cert.certificationNumber

        if (cert.insert){
            certNumber = `${certNumber}-${cert.insert}`
        }

        return certNumber
    }

    const certFileLink = (certNumber: string): string => {

        return `https://${process.env.FILES_DOMAIN}/personal-naks-certification/by-number/${certNumber}/download`
    } 
</script>

<style scoped lang="css"></style>