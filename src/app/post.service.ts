import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';




@Injectable()
export class PostService {
  post: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.post = database.list('post');
}

getPosts() {
  return this.post;
}
getPostById(postId: string){
  this.database.object('post/' + postId)
}
}
