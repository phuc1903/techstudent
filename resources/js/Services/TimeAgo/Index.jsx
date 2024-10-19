function TimeAgo({created_at}) {
    const now = new Date();
    const createDate = new Date(created_at);
    const diffInSeconds = Math.floor((now - createDate) / 1000);

    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;
    const oneMonth = oneWeek * 4;
    const oneYear = oneMonth * 12;

    let time;

    if (diffInSeconds < oneMinute) {
        time = `${diffInSeconds} giây trước`;
    } else if (diffInSeconds < oneHour) {
        time = `${Math.floor(diffInSeconds / oneMinute)} phút trước`;
    } else if (diffInSeconds < oneDay) {
        time = `${Math.floor(diffInSeconds / oneHour)} giờ trước`;
    } else if (diffInSeconds < oneWeek) {
        time = `${Math.floor(diffInSeconds / oneDay)} ngày trước`;
    } else if (diffInSeconds < oneMonth) {
        time = `${Math.floor(diffInSeconds / oneWeek)} tuần trước`;
    } else if (diffInSeconds < oneYear) {
        time = `${Math.floor(diffInSeconds / oneMonth)} tháng trước`;
    } else {
        time = `${Math.floor(diffInSeconds / oneYear)} năm trước`;
    }

    return <span className="body-small-400 text-gray-600">{time}</span>;
}

export default TimeAgo;
