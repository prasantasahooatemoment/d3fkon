
import { objectType } from '@nexus/schema'
export const classProfile = objectType({
    name:'class_profile',
    definition(t){
     t.model.calories_burned()
	t.model.class_price()
	t.model.description()
	t.model.difficulty_level()
	t.model.duration()
	t.model.id()
	t.model.name()
	t.model.sports_category()
	t.model.sports_type()
	t.model.title()
	t.model.gym_class()
    }
  })

    
