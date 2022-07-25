import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component..html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [

            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/image/forms.png',
                price: 99.99,
                code: 'xps-8796',
                duration: 120,
                rating: 5,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/image/http.png',
                price: 49.99,
                code: 'LKL-1096',
                duration: 80,
                rating: 4.2,
                releaseDate: 'September, 2, 2022'
            }
        ]
    }


}