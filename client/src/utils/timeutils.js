import moment from "moment";

const getTimezoneOffset = () => {
    const offset = moment().utcOffset();
    const sign = offset >= 0 ? '+' : '-';
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    return `${sign}${hours}`;
};

export { getTimezoneOffset };