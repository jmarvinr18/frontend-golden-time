import moment from "moment";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatTime: (d: any) => moment(d).format('LL')
        }
    }
})