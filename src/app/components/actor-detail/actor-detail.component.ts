import { Component, OnInit } from '@angular/core';
import { ActorDetailResponse, Cast } from '../../models/actor-detail.interface';
import { ActorService } from '../../services/actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent implements OnInit {

  actorId: string | null = '';
  actorDetail: ActorDetailResponse | undefined;
  groupedCastByYear: Map<string, Cast[]> = new Map(); // Agrupar por año
  cast: Cast[] = [];

  constructor(private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actorId = this.route.snapshot.paramMap.get('id');

    this.actorService.getOneActor(this.actorId!).subscribe((response) => {
      this.actorDetail = response;
    })

    this.actorService.getCast(this.actorId!).subscribe((response) => {
      this.cast = response.cast;
      this.groupCastByYear();
    })
  }

  getImagen(url: string): string {
    return 'https://image.tmdb.org/t/p/w500' + url;
  }

  getTotalCredits(): number {
    return this.cast.length;
  }

  getCreditaciones(): string {
    return this.cast.map(item => item.credit_id).join(', ');
  }

  groupCastByYear(): void {
    this.groupedCastByYear.clear();
    this.cast.forEach(item => {
      const year = item.release_date?.slice(0, 4);
      if (year) {
        if (!this.groupedCastByYear.has(year)) {
          this.groupedCastByYear.set(year, []);
        }
        this.groupedCastByYear.get(year)?.push(item);
      }
    });
  }

  getSortedYears(): string[] {
    return Array.from(this.groupedCastByYear.keys()).sort((a, b) => parseInt(b) - parseInt(a));
  }
}
