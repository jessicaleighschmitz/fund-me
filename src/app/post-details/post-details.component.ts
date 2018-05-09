import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostService]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService
) { }

ngOnInit() {
 this.route.params.forEach((urlParameters) => {
 this.postId = urlParameters['id'];
});
this.postToDisplay = this.postService.getPostById(this.postId);
}


}
