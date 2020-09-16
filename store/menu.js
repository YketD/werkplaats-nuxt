export const state = () => ({
    image: "test"
})

export const mutations = {
    setImage(state, image) {
        state.image = image;
    }
}
