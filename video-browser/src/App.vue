<template>
<div class= "container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoDetail :video="" />
    <VideoList @videoSelect="onVideoSelect"  : videos="videos"></VideoList>
</div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar.vue';
    import VideoList from './components/VideoList.vue';
    import VideoDetail from './components/VideoDetail.vue';
    
    const API_KEY = 'AIzaSyBmgwS99wZTJH2KjEnKkxu_Dp6M2zuy0qY';
    
    export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList,
        VideoDetail
    },
    data() {
        return { videos: [] };//add property of videos and will go up to VideoList v-bind
 },
    methods: {
        onVideoSelect(video){
            conosole.log(video);
        },
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

