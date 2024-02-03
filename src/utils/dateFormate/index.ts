import moment from "moment";

export const  formatDate = (inputDateString: string) =>  {
    const momentDate = moment(inputDateString);
    return momentDate.format("MM/DD/YYYY");
}