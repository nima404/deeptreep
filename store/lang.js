export const state = () => ({
    lang:'English'
})
export const mutations = {
    English(state){
        state.lang = 'English'
    },
    German(state){
        state.lang = 'German'
    },
    Farsi(state){
        state.lang = 'Farsi'
    },
    Chines(state){
        state.lang = 'Chines'
    },
    Spanish(state){
        state.lang = 'Spanish'
    },
    Arabic(state){
        state.lang = 'Arabic'
    },
}