import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';
  serverCreationStatus = 'No Server Created';
  allowNewServer = true;

  getServerStatus() {
    return 'ss: ' + this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created';
  }

  constructor(private router: Router, private currentRoute: ActivatedRoute) {}

  goToTForms() {
    this.router.navigate(['tforms'], { relativeTo: this.currentRoute });
  }
}
