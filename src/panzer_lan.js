//    Js lib for client-side language detection
//    Copyright (C) 2016  Darien Miranda - Panzer::dev
//    <contacto.panzermx@gmail.com>
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Get the user language preferences

try{
  _lan = navigator.languages[0];

}catch(e){
  _lan = navigator.language;
}
var panzerLan = {

  _lans: _lan,
  currentLan: "",
  loadDefaultLan: function (){
    _selector = '[data-plan]';
    if(this._lans.substring(0,2) == "es"){
      //load spanish
      this.loadLan("es");
      this.currentLan = "es";
    }else{
      //load english
      this.loadLan("en");
      this.currentLan = "en";
    }
  },
  swapLan:function(){
    if(this.currentLan == "es"){
      this.loadLan("en");
    }else if(this.currentLan == "en"){
      this.loadLan("es");
    }
  },
  loadLan:function(lan){
    $(_selector).each(function(index){
      _plan        = $(this).attr("data-plan");
      if(lan == "en"){
        _translation = panzerlan_en.strings[_plan];
      }else if (lan == "es"){
        _translation = panzerlan_es.strings[_plan];
      }
      $(this).text(_translation);
    });
    this.currentLan = lan;
    
  }

};
