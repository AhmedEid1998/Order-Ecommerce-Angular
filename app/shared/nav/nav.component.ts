import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {

    $('.menu').click( function(){
      $('.hid').toggleClass('atractiv')
      $('.menu').toggleClass('clicked')
      // $('.hid ul').toggleClass('disAppear')
    })
    window.onscroll = ()=>{
      $('.hid').removeClass('atractiv')
      $('.menu').removeClass('clicked')
    }


  }

  // clicked(){
  //   $('.hid').toggleClass('atractiv')
  // }



}
