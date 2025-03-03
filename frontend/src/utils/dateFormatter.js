export const formateDate = (dateString) => {
    if(!dateString){
        return
    }
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-In',{
        year : "numeric",
        month : "long",
        day : "numeric"
    }).format(date)
}