'use strict';

// Eger eyni classda olan bir cox elementi secmek isteyirikse onda querySelectorAll istifade edirik

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// eger hansisa bir elementin clasina ulasmaq isteyirikse.element. classList yaziriq. Class elave etmek istesek .add silmek istesek .remove istifade edrik

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}

// Burda kod tekrarinin qarsisini almaq ucun closeModal adli funksiya yaradib onu addEventListener icinde cagirirq.hec vaxt function() bele cagirmiriq.

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Keyboard events- klaviaturada olan klavishlere onclick verme

document.addEventListener('keydown', function (e) {

    // Eger click olunan klavyenin keyi Escapedirse  ve    eger modalin terkibinde hidden clasi yoxdursa islesin

  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {

    closeModal();
    
  }
});

// Bu funksiyada hansi duymeye click elesek logda onu gosterecek
