# This script outputs a new dict for a supported language
# Add it to the LANGUAGES_SUPPORTED dict with a valid code and name.
# python babel_trans.py
# copy + paste the output

import babel
from pprint import pprint

LANGUAGES_SUPPORTED = [
  {'code': 'ar', 'name': 'Arabic'}
]

# Add native language name via lookup using the ICU api.
for lang_dict in LANGUAGES_SUPPORTED:
  code = lang_dict['code']
  locale = babel.Locale.parse(code)
  native = locale.get_display_name(code)
  if 'native' not in lang_dict:
    lang_dict['native'] = native
    pprint(lang_dict)
