import { Recipe } from './recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Caramelized Shallot Pasta', 
    'This pasta is all about the shallots, cooked down in a bath of olive oil to a jammy, caramelized paste.',
    'https://static01.nyt.com/images/2020/01/29/dining/27Romanrex/merlin_167079174_ecc032e7-071b-44ab-8852-0d5025d0e90d-articleLarge.jpg'),
    new Recipe('Honeyed Pistachio Mooncakes', 
    'Mooncakes are pastries timed to the Mid-Autumn Festival, a holiday that celebrates the commencement of the harvest season.',
    'https://static01.nyt.com/images/2021/09/08/dining/03MOONCAKEREX1-pistachio-honey-mooncake/merlin_194033367_9230d531-e73c-49ca-b63f-73aa806bfa26-articleLarge.jpg')
  ]

  getRecipes() {
    return this.recipes.slice()
  }
}