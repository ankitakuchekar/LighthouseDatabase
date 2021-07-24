export const regName:string = "[a-zA-Z ]{3,30}";
export const regPassword:string = "(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}";
export const regContact:string = "([0-9]{10,12})";
export const regEmail:string = "[a-z0-9._%+-]+@([a-z0-9.-]{5})+\.[a-z]{2,4}";