---
sidebar_label: New Entry
pagination_label: New Entry
description: Start your entry and prepare for the synthesis.
pagination_next: snippets
pagination_next_label: Use snippets to describe your scheme
---
# New Entry

## 1.  Open your ELN Entry

<video autoplay muted loop playsinline width="60%" alt="screen recording of opening an ELN entry">
	<source src="../assets/videos/how-to-start-1.mp4" type="video/mp4">
</video>

Click <img alt="Electronic Notebook" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_rbf.png"> to open the ELN tab. Click <img alt="Create" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_plus.png"> and customize a reaction code to create a new entry. Beware that once entry is created it cannot be deleted and the reaction code cannot be modified. To hide the unwanted entries on the overview of ELN simply click <img alt="The Icon with an eye" style="height: 1.5em; width: auto; vertical-align: top;" src="../assets/images/img1_Hide-eye.png"> in `Hide` column on the right. 

## 2.  Customize name of entry in 'Title'
<img class="screenshot" width="70%" alt="screenshot of customized title Sandmeyer Reaktion" src="../assets/images/img_title1.png"/>
<img class="screenshot" width="70%" alt="screenshot of title on the overview page" src="../assets/images/img_title2.png"/>

On the page of the ELN entry enter a title of your choice for the reaction and click <img alt="Save Data" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_savedata.png">. From now on your entry would be automatically saved regularly. But it is still strongly recommended to save manually after each ammendment!

## 3.  Add your reaction and reagents
### Method 1 (recommended): First data entry then chemical equation
> It saves your time from drawing chemical structures.

<video controls muted width="100%" poster="../assets/videos/thumbnail_how-to-start-3-4.png">
	<source src="../assets/videos/how-to-start-3-4.mp4" type="video/mp4">
</video>

1. The `code` column itself has search function embedded. You may search with:
    1. (the first few characters of) the trivial name (e.g. with 'anthran' or in full 'anthranilic acid')
    2. the chemical formula (e.g. with 'KI', 'HCl').
    3. the CAS number (look up either on [GESTIS](https://gestis.dguv.de/search) (in German) or on [CAS Sci Finder](https://scifinder-n.cas.org/) (in English, login with *name@uni-jena.de* required))
    4. the product code of a product you synthesized before
2. Hit 'Enter' to search. In the pop-up window click the chemical of choice once to select. Usually the fields in `Name`, `mf` (molecular formula), `mw` (molecular weight) and `density` are automatically filled up. Nevertheless for some molecules, of which relatively little literature are currently available, manual input might be required.
3. Click the <span class="icon" alt="Hexagon icon on the right"><svg style="margin: 0; background-color: b8b8b8; width: 1.5em; height: 1.5em; vertical-align: top;" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 280,85 280,215 150,290 20,215 20,85" fill="none" stroke="#000" stroke-width="10" stroke-linejoin="round"/></svg></span> to add the molecules into your chemical editor. Use the Lasso Pointer Tool <img alt="Left 5th Key" style="width:1.5em; vertical-align:top;" src="../assets/images/img_chemicaleditor_left_5.png"> in the toolbar (lasso as shown in video or hold 'Alt' and drag for retangular selection or double click a bond or an atom of the molecule) to rearrange the components in the chemical equation. Products stand on the right of the reaction arrow and are labeled with a e.g. 'P1' watermark.
4. Use the Cleanup Button <img alt="Clean Up Tool" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_cleanup.png"> to clean up the equation. 

### Method 2: First chemical equation then data entry
[Click here](adding-chemical-equation.md) for more information about the *OpenChemLib* chemical editor.

> For those who are just looking for a Copy & Paste: <br>
> <img alt="5th Key" style="width:1.5em; vertical-align:top;" src="../assets/images/img_chemicaleditor_tr_5.png"> then <img alt="2nd Key" style="width:1.5em; vertical-align:top;" src="../assets/images/img_chemicaleditor_tr_2.png"> (left: reactant; right: product): across **different** entries.<br>
> <img alt="6th Key" style="width:1.5em; vertical-align:top;" src="../assets/images/img_chemicaleditor_tr_6.png">: **within the same** editor<br>
> Or use the Lasso Pointer Tool <img alt="Left 5th Key" style="width:1.5em; vertical-align:top;" src="../assets/images/img_chemicaleditor_left_5.png"> to select the target molecule, hold 'Shift' and drag the molecule to create a copy <br>

1. Draw each chemical structure you need inside the chemical editor, or paste your chemical equation from e.g. ChemDraw or ChemSketch (if nothing happens, try "copy as SMILES" :) )
2. Repeat Step 1 to 5 except 4 in [Method 1](#method-1-recommended-first-data-entry-then-chemical-equation)

## 4. Calculation of the amounts of reagents required (*Ansatztberechnung*)
> *The following instructions are only based on OC2-Praktikum.*

<video controls muted width="100%" poster="../assets/videos/thumbnail_how-to-start-5.png">
	<source src="../assets/videos/how-to-start-5.mp4" type="video/mp4">
</video>

1. If necessary, amend the purity and density.
> Possible units for purity: `%`, molar `M` (mmoles/mL), millimolar `mM` and loading `L` (mmoles/g)
2. Enter the required amount of `mmoles` or `ml` or `g` of the reactants according to your script (*Versuchsanleitung*) and press 'Enter' to confirm. Cells in `g`, `ml`, `mmoles` and `equiv` would be automatically updated. If not, usually it is due to missing information of density or the material is in solid under standard condition. Sometimes manual input might be required. Left click for the next cell for next entry.
> Instead of left clicking the next cell, press 'Enter', then 'Tab' or 'Shift'+'Tab' to activate next cell for entry.
3. Make sure your have the “Linked” checkbox on the right side checked. 
> The 'Theoretical yield' of produtcs on the right is calculated based on the starting materials with 1 equiv.
4. Fill in the desired yielding of your product (e.g. in `g` 10 for liquid or 5 for solid compounds). The amount of reactants required would then be automatically updated.
> To delete and redo entries in `g`, `ml` and `mmoles` press 'Delete' inside the cell in `equiv`.
5. Determine the kind of your reagents (starting materials, reactants...)
> For solvents and wash solvent it is adviced to set the `equiv` to 1.
6. Click <img alt="Save Data" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_savedata.png"> to save.

## 5. GHS Pictogramms, H- and P-statements 

<video controls muted width="100%" poster="../assets/videos/thumbnail_how-to-start-8.png">
	<source src="../assets/videos/how-to-start-8.mp4" type="video/mp4">
</video>

1. Go to 'Prefs' at the top of the page.
2. Check the box in 'Lookup for safety information' and 'Save Preference'. Return to 'Reaction' at the top of the page.
3. Click through the cells in `Hazard Pictograms` to activate the lookup function. Symbols of i and <span class="hazard"><svg alt="hazard symbol" style="margin: 0; vertical-align: middle;" width="30" height="30" viewBox="0 0 680 600" xmlns="http://www.w3.org/2000/svg"><polygon points="340,60 560,480 120,480" fill="none" stroke="#222" stroke-width="20" stroke-linejoin="round"/><rect x="327" y="200" width="26" height="150" rx="6" fill="#222"/><circle cx="340" cy="410" r="18" fill="#222"/></svg></span> appear automatically. 
4. Click <span class="hazard"><svg alt="hazard symbol" style="margin: 0; vertical-align: middle;" width="30" height="30" viewBox="0 0 680 600" xmlns="http://www.w3.org/2000/svg"><polygon points="340,60 560,480 120,480" fill="none" stroke="#222" stroke-width="20" stroke-linejoin="round"/><rect x="327" y="200" width="26" height="150" rx="6" fill="#222"/><circle cx="340" cy="410" r="18" fill="#222"/></svg></span> in each row to add the corresponding GHS labels. Manual editing (e.g. '6' for GHS 6 pictogram) is also possible.
5. By clicking the information symbol i you may browse through the hazard and precaution statements (*H- & P-Sätze*) retrieved from PubChem. In the 'Experimental' tab you can find useful information of the chemical such as the boiling and meltling point.

## 6. Change status of the entry
<video loop autoplay muted width="70%">
	<source src="../assets/videos/how-to-start-9.mp4" type="video/mp4">
</video>

Change the status of your ELN entry by clicking one of the buttons or customize your own label. Click <img alt="Save Data" style="height: 1.5em; width: auto; vertical-align: top" src="../assets/images/img_savedata.png"> afterwards. The history of changes cannot be modified.

> Now your ELN is ready to use!
