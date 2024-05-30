export default function formatDate(date: Date | undefined) {

    if(!date) {
        return ''
    }

    let dataFormated = new Date(date);

    let day = String(dataFormated.getDate()).padStart(2, '0');
    let month = String(dataFormated.getMonth() + 1).padStart(2, '0')
    let year = dataFormated.getFullYear();
    return year + '-' + month + '-' + day;
}