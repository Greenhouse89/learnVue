<template>
<div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList : videos="videos"></VideoList>
</div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar.vue';
    import VideoList from './components/VideoList.vue';
    
    const API_KEY = 'AIzaSyBmgwS99wZTJH2KjEnKkxu_Dp6M2zuy0qY';
    
    export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return { videos: [] };//add property of videos and will go up to VideoList v-bind
 },
    methods: {
        onTermChange(searchTerm) {
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY, 
                    type: 'video', 
                    part: 'snippet',
                    q: searchTerm //query
                }
            }).then(response => {
                this.videos = response.data.items;
            //console.log(response));
            });
        }
    }
};
</script>

