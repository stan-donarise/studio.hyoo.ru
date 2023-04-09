namespace $.$$ {
	
	export class $hyoo_studio_value_bound extends $.$hyoo_studio_value_bound {
		
		@ $mol_mem
		guid() {
			return $mol_guid()
		}
		
		@ $mol_mem
		self() {
			return this.bound_expanded() ? [ this.Opened_bound_prop() ] : super.self()
		}

		@ $mol_mem
		bound_expanded(next?: any) {
			return this.Opened_bound_prop().expanded(
				next !== undefined ? 
					next : 
					undefined
			)
		}

		@ $mol_mem
		Opened_bound_prop() {
			const prop = this.Bound_prop( this.bound_prop_name() + ':' + this.guid() )
			prop.trigger_label = () => []
			prop.label_sub = () => [
				...this.head(), this.Value_tools(), this.Bound_prop_name(), prop.Trigger(), prop.Prop_tools()
			]
			return prop
		}
		
		@ $mol_mem
		prop_name_list() {
			return this.props_bindable().kids.map( prop => prop.type )
		}
		
		@ $mol_mem
		bound_prop_name( next?: string ) {
			
			const val = this.tree()
			
			if( next === undefined ) {
				return this.$.$mol_view_tree2_prop_split( val.kids[ 0 ] ).name.text() || '...'
			}
			
			this.tree(
				val.insert( val.struct( next ), null )
			)
			
			return next || '...'
		}
	}
	
}