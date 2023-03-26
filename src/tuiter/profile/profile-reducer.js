import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            const newProfile = action.payload;
            const oldProfile = state[0];
            oldProfile.firstName = newProfile.firstName;
            oldProfile.lastName = newProfile.lastName;
            oldProfile.bio = newProfile.bio;
            oldProfile.location = newProfile.location;
            oldProfile.website = newProfile.website;
            oldProfile.dateOfBirth = newProfile.dateOfBirth;
        }

    }
});
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;