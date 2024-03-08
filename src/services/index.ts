import * as recipes from "./recipesService"
import * as preparations from "./preparationsService"
import * as ingredients from "./ingredientsService"

export const services = {
    recipes,
    ingredients,
    preparations,

    storage: {
        imagePath:
        "https://bsngpkescurgygcmkffw.supabase.co/storage/v1/object/public/ingredients",
    }
}