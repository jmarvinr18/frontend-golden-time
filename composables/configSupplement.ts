import { useI18n } from "vue-i18n";

export const servingType = () => {
    const {t} = useI18n();
    return [
        {
            label: t("SelectLabel"),
            value: "",
        },
        {
            label: t("PowderOption"),
            value: "powder",
        },
        {
            label: t("CapsuleOption"),
            value: "capsule",
        },
        {
            label: t("TabletOption"),
            value: "tablet",
        },
        {
            label: t("OthersOption"),
            value: "other",
        },
    ]
};

export const supplementType = () => {
    const {t} = useI18n();
    return [
        {
            label: t("SelectLabel"),
            value: ""
        },
        {
            label: t("ProteinOption"),
            value: "protein",
        },
        {
            label: t("BCAAOption"),
            value: "BCAA",
        },
        {
            label: t("EAAOption"),
            value: "EAA"
        },
        {
            label: t("GlutamineOption"),
            value: "glutamine"
        },
        {
            label: t("CreatineOption"),
            value: "creatine"
        },
        {
            label: t("MultivitaminOption"),
            value: "multivitamin"
        },
        {
            label: t("CitrullineOption"),
            value: "citrulline"
        },
        {
            label: t("AgrinineOption"),
            value: "agrinine"
        },
        {
            label: t("Omega3Option"),
            value: "omega-3"
        },
        {
            label: t("TaurineOption"),
            value: "taurine"
        },
        {
            label: t("CaffeineOption"),
            value: "caffeine"
        },
        {
            label: t("AgmatineOption"),
            value: "agmatine"
        },
        {
            label: t("PeptideOption"),
            value: "peptide"
        },
        {
            label: t("HMBOption"),
            value: "HMB"
        }
    ]
};