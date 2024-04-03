const addEducation = document.querySelector('.add-education');
const addWorkExperience = document.querySelector('.add-work-experience');
const educationBlock = document.querySelector('.education-block');
const workExperience = document.querySelector('.work-experience');

let educationCounter = 2;
let workExperienceCounter = 1;

addEducation.addEventListener('click', () => {
  const educationInput = `
    <input type="text" id="degree-${educationCounter}" placeholder="Degree" />
    <input type="text" id="institution-${educationCounter}" placeholder="Institution" />
    <input type="text" id="year-${educationCounter}" placeholder="Year" />
  `;
  educationBlock.insertAdjacentHTML('beforeend', educationInput);
  educationCounter++;
});

addWorkExperience.addEventListener('click', () => {
  const workExperienceInput = `
    <input type="text" id="position-${workExperienceCounter}" placeholder="Position" />
    <input type="text" id="company-${workExperienceCounter}" placeholder="Company" />
    <input type="text" id="duration-${workExperienceCounter}" placeholder="Duration" />
    <textarea id="description-${workExperienceCounter}" placeholder="Description"></textarea>
  `;
  workExperience.insertAdjacentHTML('beforeend', workExperienceInput);
  workExperienceCounter++;
});

// TODO: Implement download functionality