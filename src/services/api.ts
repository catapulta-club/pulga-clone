import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pjskzcgutezbrokxyyyb.supabase.co/rest/v1',
    headers: {
        'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqc2t6Y2d1dGV6YnJva3h5eXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2MzA3MjMsImV4cCI6MTk3MzIwNjcyM30.YCXJjE8rnAL7QUZRLiV74M9jKvvfKszdIhKb-xLD2nM',
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqc2t6Y2d1dGV6YnJva3h5eXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2MzA3MjMsImV4cCI6MTk3MzIwNjcyM30.YCXJjE8rnAL7QUZRLiV74M9jKvvfKszdIhKb-xLD2nM'
    }
});

export { api };