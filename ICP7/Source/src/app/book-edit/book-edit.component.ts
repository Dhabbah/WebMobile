import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {log} from 'util';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {};
  bookForm: FormGroup;
  isbn = '';
  title = '';
  description = '';
  author = '';
  publisher = '';
  published_year = '';
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'author': [null, Validators.required],
      'publisher': [null, Validators.required],
      'published_year': [null, Validators.required]
    });
    this.getBook(this.route.snapshot.params['id']);
  }
  onFormSubmit(form: NgForm) {
    const id = this.route.snapshot.params['id'];
    this.api.updateBook(id, form)
      .subscribe(res => {
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      id = data._id;
        // console.log(data);
        // this.book = data;
      console.log('test from the function');
      console.log(id);
      this.bookForm.setValue({
        isbn: data.isbn,
        title: data.title,
        description: data.description,
        author: data.author,
        publisher: data.publisher,
        published_year: data.published_year
      });

      });
  }

  // getBook(id) {
  //   this.api.getBook(id).subscribe(data => {
  //     id = data._id;
  //     this.bookForm.setValue({
  //       isbn: data.isbn,
  //       title: data.title,
  //       customerLastName: data.customerLastName,
  //       customerEmail: data.customerEmail,
  //       customerPhoneNumber: data.customerPhoneNumber
  //
  //     }); console.log(data);
  //   });
  // }
}
