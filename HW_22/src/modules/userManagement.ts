export namespace UserManagement {
  export namespace Admin {
    export class Admin {
      name: string;
      email: string;
      isSuperAdmin: boolean;
      constructor(name: string, email: string, isSuperAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }
      isAdmin(): boolean {
        return this.isSuperAdmin;
      }
      makeSuperAdmin(): void {
        this.isSuperAdmin = true;
      }
      revokeSuperAdmin(): void {
        this.isSuperAdmin = false;
      }
    }
  }
}
