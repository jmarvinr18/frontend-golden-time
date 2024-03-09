import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useGeneralStore = defineStore("generalStore", {
    state: () => {
        return {
            isLoading: false,
            error: {
                message: "",
                status: false
            },
            success: {
                message: "",
                status: false
            },
            isMobile: false,
        }
    },
    actions: {
        setIsLoading(value: any) {
            this.isLoading = value;
        },
        setError(value: any, message: any) {
            this.setIsLoading(false);
            this.error = {
                message: message,
                status: value,
            };

            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: message
            });
        },
        setSuccess(value: any, message: any) {
            this.setIsLoading(false);
            this.success = {
                message: message,
                status: value,
            };

            Swal.fire({
                icon: "success",
                title: "Great!",
                text: message
            });
        },
        setMobile(value: any) {
            this.isMobile = value;
        }
    },

})