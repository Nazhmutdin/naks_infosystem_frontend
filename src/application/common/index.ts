export const WELDING_NAKS_METHODS = [
    "РАД",
    "РД",
    "МПГ",
    "МП",
    "АФ",
    "П"
]


export const PERSONAL_TABLE_CONFIG = {
    columns: {
        name: {
            headerClass: "name-header",
            rowCellClass: "name-row-cell",
            text: "name"
        },
        kleymo: {
            headerClass: "kleymo-header",
            rowCellClass: "kleymo-row-cell",
            text: "kleymo"
        },
        birthday: {
            headerClass: "birthday-header",
            rowCellClass: "birthday-row-cell",
            text: "birthday"
        },
        expAge: {
            headerClass: "exp-age-header",
            rowCellClass: "exp-age-row-cell",
            text: "exp age"
        },
        nation: {
            headerClass: "nation-header",
            rowCellClass: "nation-row-cell",
            text: "nation"
        }
    }
}


export const PERSONAL_CERTIFICATION_TABLE_CONFIG = {
    columns: {
        certificationNumber: {
            headerClass: "certification-number-header",
            rowCellClass: "certification-number-row-cell",
            text: "certification number"
        },
        certificationDate: {
            headerClass: "certification-date-header",
            rowCellClass: "certification-date-row-cell",
            text: "certification date"
        },
        expirationDateFact: {
            headerClass: "expiration-date-fact-header",
            rowCellClass: "expiration-date-fact-row-cell",
            text: "expiration date"
        },
        method: {
            headerClass: "method-header",
            rowCellClass: "method-row-cell",
            text: "method"
        }
    }
}


export const NDT_TABLE_CONFIG = {
    columns: {
        company: {
            headerClass: "company-header",
            rowCellClass: "company-row-cell",
            text: "company"
        },
        subcompany: {
            headerClass: "subcompany-date-header",
            rowCellClass: "subcompany-date-row-cell",
            text: "subcompany"
        },
        project: {
            headerClass: "project-header",
            rowCellClass: "project-row-cell",
            text: "project"
        },
        weldingDate: {
            headerClass: "welding-date-header",
            rowCellClass: "welding-date-row-cell",
            text: "welding-date"
        },
        ndtType: {
            headerClass: "ndt-type-header",
            rowCellClass: "ndt-type-row-cell",
            text: "ndt type"
        }
    }
}
