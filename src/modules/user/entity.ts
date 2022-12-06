import moment from 'moment';

class UserEntity {
  fullName: string = '';
  emailAddress: string = '';
  userPermissions: AccountPermissionEntity[] = [];
  id: string = '';
  createdAt: string = '';
  updateAt: string = '';
  avatar: string = '';
  roleId?: string = '';
  userName: string = '';
  active: boolean = true;

  constructor(user: { createdAt: moment.MomentInput; updateAt: any; createAt: moment.MomentInput; active: any; }) {
    if (!user) return;
    Object.assign(this, user);

    this.createdAt = user?.createdAt ? moment(user?.createdAt).format('DD/MM/YYYY HH:mm:ss') : '';
    this.updateAt = user?.updateAt ? moment(user?.createAt).format('DD/MM/YYYY HH:mm:ss') : '';
    this.active = user?.active ? true : false;
  }

  static createArrayUser(arrUser: Array<any>): Array<UserEntity> {
    const list = arrUser.map(x => new UserEntity(x));
    return list;
  }
}

export class AccountPermissionEntity {
  userId: string = '';
  code: string = '';
  constructor(permission: any) {
    if (!permission) return;
    Object.assign(this, permission);
  }
}

export class PermissionEntity {
  permissionCode: string = '';
  permissionName: string = '';
  moduleName: string = '';
  permissionCreateAt: string = '';
  constructor(permission: any) {
    if (!permission) return;
    Object.assign(this, permission);
  }
  static createListPermission(listPer: any[]) {
    if (!Array.isArray(listPer)) return null;
    return listPer.map(permission => {
      return new PermissionEntity(permission);
    });
  }
}

export default UserEntity;
