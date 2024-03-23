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
            value: "粉末",
        },
        {
            label: t("CapsuleOption"),
            value: "カプセル",
        },
        {
            label: t("TabletOption"),
            value: "タブレット",
        },
        {
            label: t("OthersOption"),
            value: "その他",
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
            value: "プロテイン",
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
            value: "グルタミン"
        },
        {
            label: t("CreatineOption"),
            value: "クレアチン"
        },
        {
            label: t("MultivitaminOption"),
            value: "マルチビタミン"
        },
        {
            label: t("CitrullineOption"),
            value: "シトルリン"
        },
        {
            label: t("AgrinineOption"),
            value: "アルギニン"
        },
        {
            label: t("Omega3Option"),
            value: "オメガ3"
        },
        {
            label: t("TaurineOption"),
            value: "タウリン"
        },
        {
            label: t("CaffeineOption"),
            value: "カフェリン"
        },
        {
            label: t("AgmatineOption"),
            value: "アグマチン"
        },
        {
            label: t("PeptideOption"),
            value: "ペプチド"
        },
        {
            label: t("HMBOption"),
            value: "HMB"
        }
    ]
};