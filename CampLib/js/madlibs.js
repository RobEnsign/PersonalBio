const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    //prevents the form from reloading on submit
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = 
       `<h3>The Tale You've Always Wanted:</h3>
        <p>It 'was an <span class="inserted-text">${userSubmission.adjective_1}</span> evening when we decided to go camping in the woods. We packed our gear consisting of a tent, sleeping bags, and enough food to feed an (2) army. As we set up camp, I couldn't stop <span class="inserted-text">${userSubmission.verbpres}</span> with excitement.
        The forest was <span class="inserted-text">${userSubmission.adjective_2}</span>, filled with the sounds of chirping <span class="inserted-text">${userSubmission.pluralnoun}</span> and the rustling of leaves. While <span class="inserted-text">${userSubmission.verbing}</span> the tent poles, I accidentally dropped the <span class="inserted-text">${userSubmission.noun}</span> into a nearby river. Everyone laughed at me, but I felt like an <span class="inserted-text">${userSubmission.adjective_3}</span> adventurer anyway.
        Later that trip, we roasted <span class="inserted-text">${userSubmission.pluralnoun2}</span> over the campfire and told spooky stories. The fire's glow lit up our faces as we <span class="inserted-text">${userSubmission.verbpast}</span> and laughed under the starlit sky. Before heading to bed, we looked around the <span class="inserted-text">${userSubmission.location}</span> and marveled at the beauty of our surroundings.
        This camping trip was one to forever cherish—full of unexpected twists, laughter, and memories we'll always recant.
        </p>`;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton =
    `<button id="madlibs-reset" onclick="resetMadLibs()">DO IT AGAIN!</button>`;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}