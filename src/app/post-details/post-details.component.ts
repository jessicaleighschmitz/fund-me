import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
