let bast_url;

if (process.env.NODE_ENV === 'development') {
    bast_url = 'http://huangjiangjun.top:9000';
}
else if (process.env.NODE_ENV === 'debug') {
    bast_url = 'http://huangjiangjun.top:9000';
}
else if (process.env.NODE_ENV === 'production') {
    bast_url = 'http://huangjiangjun.top:9000';
}


export default {
    bast_url,
    time_out: 10000
}