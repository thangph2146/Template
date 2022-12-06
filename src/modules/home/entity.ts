import moment from "moment";

class HomeEntity {
  //copy props from backend:
  createdAt: string = "";
  constructor(home:any) {
    if(!home) return ;
    Object.assign(this, home);
    // convert entity type here
    this.createdAt = home.createdAt? moment(home.createdAt).format("DD/MM/YYYY"):"";
  }
  static createListHome(listHome:Array<any>){
    if (!Array.isArray(listHome)) return [];
    return listHome.map((home:HomeEntity) => {
      return new HomeEntity(home);
    });
  }
}
export default HomeEntity;
